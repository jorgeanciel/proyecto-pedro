import { Unsubscribe, onSnapshot } from "firebase/firestore";
import { TableServices } from "../../services/table.service";
import { TableState } from "../../store/table/table.slice";
import {
  TTableStatusDto,
  transformTableModelToTableDto,
} from "../../types/table/table.interface";
import { useTableActions } from "../actions/table/table.actions";
import { useAppSelector } from "../use-storage";

type UseTableState = {
  onGetTables: () => Promise<Unsubscribe | undefined | void>;
  onChangeStatusByKey: (key: string, status: TTableStatusDto) => Promise<void>;
  onReset: () => void;
  state: TableState;
};
const useTableOrder = (): UseTableState => {
  const tableServices = new TableServices();
  const tableState = useAppSelector((state) => state.table);
  const { handlerPending, handlerFailed, handlerReset, handlerResolved } =
    useTableActions();

  const onGetTables = async (): Promise<Unsubscribe | undefined | void> => {
    handlerPending();
    try {
      const query = tableServices.getTablesQuery();
      const unsubscribe = onSnapshot(query, (querySnapshot) => {
        console.log("Entro en escucha");
        const result = transformTableModelToTableDto(querySnapshot);
        return handlerResolved(result);
      });
      return unsubscribe;
    } catch (error) {
      return handlerFailed(error);
    }
  };

  const onChangeStatusByKey = async (key: string, status: TTableStatusDto) => {
    try {
      await tableServices.changeStatusByKey(key, status);
    } catch (error) {
      return handlerFailed(error);
    }
  };

  return {
    onGetTables,
    onChangeStatusByKey,
    onReset: handlerReset,
    state: tableState,
  };
};

export default useTableOrder;

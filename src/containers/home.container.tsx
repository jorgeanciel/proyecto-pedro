import { useEffect, useState } from "react";
import Table from "../components/atoms/table/table";
import ProfileCard from "../components/organisms/profile-card/profile-card";
import useTableOrder from "../hooks/table/use-table.hook";
import ConfirmModal from "../components/molecules/modals/confirm-modal";
import ErrorModal from "../components/molecules/modals/error-modal";
import { useNavigate } from "react-router-dom";
import LayoutTemplate from "../components/templates/home-template/home-template";

const HomeContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyTable, setKeyTable] = useState("");
  const [isLoadingChangeStatus, setIsLoadingChangeStatus] = useState(false);
  const navigate = useNavigate();

  const {
    onGetTables,
    onChangeStatusByKey,
    state: { tables, success, error },
    onReset,
  } = useTableOrder();

  const [unsubscribe, setUnsubscribe] = useState<(() => void) | null>(null);

  const handleOnClickTable = (key: string) => {
    setIsModalOpen(true);
    setKeyTable(key);
  };

  const handlerOnConfirm = async () => {
    setIsLoadingChangeStatus(true);
    await onChangeStatusByKey(keyTable, "active");
    setIsLoadingChangeStatus(false);
    setIsModalOpen(false);
  };

  const handlerOnCancel = () => {
    setIsModalOpen(false);
  };

  const handlerOnGetTables = async () => {
    const unsub = await onGetTables();
    setUnsubscribe(() => unsub);
  };

  useEffect(() => {
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [unsubscribe]);

  useEffect(() => {
    handlerOnGetTables();
    return () => {
      onReset();
    };
  }, []);

  return (
    <LayoutTemplate>
      <header className="pt-20">
        <ProfileCard />
      </header>
      {success && (
        <main className="mt-5 py-5 px-3 md:px-6 bg-white rounded-lg shadow">
          <section className="flex flex-wrap justify-between gap-3 md:gap-6">
            {tables.map((table, i) => (
              <Table
                key={i}
                table={table as any}
                onClick={handleOnClickTable}
              />
            ))}
          </section>
        </main>
      )}
      <footer>
        <ConfirmModal
          isOpen={isModalOpen}
          onConfirm={handlerOnConfirm}
          onCancel={handlerOnCancel}
          isLoading={isLoadingChangeStatus}
        />
        <ErrorModal isOpen={error} />
      </footer>
    </LayoutTemplate>
  );
};

export default HomeContainer;

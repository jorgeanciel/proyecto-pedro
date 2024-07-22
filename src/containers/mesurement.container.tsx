import { useEffect, useState } from "react";
import LayoutTemplate from "../components/templates/home-template/home-template";
import ModalFormRegisterMeasurement from "../components/templates/register-measurement/modal-form-register-mesurement";
import { MesurementService } from "../services/mesurement.service";
import {
  Mesurement,
  RequestCreateMesurement,
} from "../types/mesurement/mesurement.interface";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import Table, {
  ColTable,
  ItemAction,
  RowTable,
} from "../components/molecules/table";

const MeasurementContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mesurements, setMesurements] = useState<Mesurement[]>([]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const mesurementServices = new MesurementService();

  const getMesurement = async () => {
    const resultMesurement = await mesurementServices.getMesurement("1");
    setMesurements(resultMesurement);
  };

  const createMesurement = async (nombre: string, abreviatura: string) => {
    try {
      await mesurementServices.createMesurement({
        nombre,
        abreviatura,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateMesurement) => {
    createMesurement(values.nombre, values.abreviatura);
  };

  useEffect(() => {
    getMesurement();
  }, []);

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Unidad de Medida
        </Typography>
        <TextIcon
          onClick={handleModal}
          styles="min-w-[100px] gap-2"
          label="Nuevo"
          labelSpacing="widest"
          variant="small"
          labelColor="text-gray-700"
          family="bold"
          icon="add"
          iconSize="20"
          iconColor={myColors["danger-light"]}
        />
      </header>
      <section className="bg-gray-3 opacity-40 w-[98%] h-[1.5px] my-5 rounded-lg"></section>
      <main className="mt-6">
        <Table heads={["Codigo", "Nombre", "Abreviatura", "Acciones"]}>
          {mesurements.map((mesurement) => (
            <RowTable>
              <ColTable value={mesurement.id} />
              <ColTable value={mesurement.nombre} />
              <ColTable value={mesurement.abreviatura} />
              <ItemAction
                onClickEdit={() => {
                  setIsOpen(true);
                }}
              />
            </RowTable>
          ))}
        </Table>
      </main>
      <footer>
        <ModalFormRegisterMeasurement
          isOpen={isOpen}
          onCancel={handleModal}
          onSubmit={(values) => {
            handleOnSubmit(values);
            handleModal();
          }}
        />
      </footer>
    </LayoutTemplate>
  );
};

export default MeasurementContainer;

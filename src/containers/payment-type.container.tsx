import { useEffect, useState } from "react";
import LayoutTemplate from "../components/templates/home-template/home-template";

import { PaymentTypeServices } from "../services/payment-type.service";
import {
  PaymentType,
  RequestCreatePaymentType,
} from "../types/payment-type/payment-type.interface";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import ModalFormRegisterTypeToPay from "../components/templates/register-type-to-pay/modal-form-register-typeToPay";
import { TDropdownOption } from "../components/molecules/dropdown";
import { PaymentMethodServices } from "../services/payment-method.services";
import Table, { ColTable, RowTable } from "../components/molecules/table";

const PaymentTypeContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [methodPay, setMethodPay] = useState<TDropdownOption[]>([]);
  const [paymentTypes, setPaymentTypes] = useState<PaymentType[]>([]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const paymentTypeServices = new PaymentTypeServices();
  const paymentMethodServices = new PaymentMethodServices();

  const getMethodPay = async () => {
    const resultMethodPay = await paymentMethodServices.getPaymentMethod("1");
    setMethodPay(
      resultMethodPay.map((item) => ({
        value: item.id,
        name: item.nombre,
      }))
    );
  };

  const getPaymentType = async () => {
    const resultPaymentType = await paymentTypeServices.getPaymentType("1");
    setPaymentTypes(resultPaymentType);
  };

  const createPaymentType = async (
    formaPagoId: string,
    nombre: string,
    formaPago: string
  ) => {
    try {
      await paymentTypeServices.createPaymentType({
        formaPagoId,
        nombre,
        formaPago,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (values: RequestCreatePaymentType) => {
    createPaymentType(values.formaPagoId, values.nombre, values.formaPago);
  };

  useEffect(() => {
    getMethodPay();
    getPaymentType();
  }, []);

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Tipo de Pago
        </Typography>
        <TextIcon
          onClick={() => setIsOpen(true)}
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
        <Table heads={["Codigo", "Nombre", "Forma de Pago"]}>
          {paymentTypes.map((paymentType) => (
            <RowTable>
              <ColTable value={paymentType.id} />
              <ColTable value={paymentType.nombre} />
              <ColTable value={paymentType.formaPago} />
            </RowTable>
          ))}
        </Table>
      </main>
      <footer>
        <ModalFormRegisterTypeToPay
          isOpen={isOpen}
          onCancel={handleModal}
          methodPay={methodPay}
          onSubmit={(values) => {
            handleOnSubmit(values);
            handleModal();
          }}
        />
      </footer>
    </LayoutTemplate>
  );
};

export default PaymentTypeContainer;

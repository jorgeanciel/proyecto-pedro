import { useEffect, useState } from "react";
import LayoutTemplate from "../components/templates/home-template/home-template";
import { PaymentMethod, RequestCreatePaymentMethod } from "../types/payment-method/payment-method.interface";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import ModalFormRegisterPaymentMethod from "../components/templates/register-way-to-pay/modal-form-register-paymentMethod";
import { PaymentMethodServices } from "../services/payment-method.services";
import Table, { ColTable, ItemAction, RowTable } from "../components/molecules/table";



const PaymentMethodContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethods, setPaymentMethods]=useState<PaymentMethod[]>([])
 
   const handleModal =()=>{
    setIsOpen(!isOpen)
   }

   const paymentMethodServices = new PaymentMethodServices();

    const getPaymentMethod = async ()=>{
        const resultPaymentMethod = await paymentMethodServices.getPaymentMethod("1")
           setPaymentMethods(resultPaymentMethod)
    }


   const createPaymentMethod = async (nombre: string) => {
     try {
       await paymentMethodServices.createPaymentMethod({
         nombre,
       });
       setIsOpen(false);
     } catch (error) {
       console.log(error);
     }
   };

   const handleOnSubmit=(values:RequestCreatePaymentMethod)=>{
        createPaymentMethod(values.nombre)
   }
   
   useEffect(()=>{
    getPaymentMethod()
   },[])
  
  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
      <Typography variant="subtitle" family="semibold">
          Forma de Pago
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
      <Table heads={["id", "nombre", "acciones"]}>
          {paymentMethods.map((category) => (
            <RowTable>
              <ColTable value={category.id} />
              <ColTable value={category.nombre} />
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
        <ModalFormRegisterPaymentMethod
          isOpen={isOpen}
          onCancel={handleModal}
          onSubmit={(values) => {
            handleOnSubmit(values)
            handleModal()
          }}
    
        />
      </footer>
    </LayoutTemplate>
  );
};

export default PaymentMethodContainer;
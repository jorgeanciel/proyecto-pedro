import { useEffect, useState } from "react";
import LayoutTemplate from "../components/templates/home-template/home-template";
import ModalFormRegisterCategory from "../components/templates/register-category/modal-form-register-category";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import { CategoryServices } from "../services/category.services";
import {
  Category,
  RequestCreateCategory,
} from "../types/category/category.interface";

import Table, {
  ColTable,
  ItemAction,
  RowTable,
} from "../components/molecules/table";

const CategoryContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const categoryServices = new CategoryServices();

  //const subCategoryServices = new SubCategoryServices();

  const getCategories = async () => {
    const resultCategories = await categoryServices.getCategories("1");
    setCategories(resultCategories);
  };

  const createCategory = async (nombre: string) => {
    try {
      await categoryServices.createCategory({
        nombre,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateCategory) => {
    createCategory(values.nombre);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Categoria
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
      <main className="mt-6 me-3">
        <Table heads={["id", "nombre", ""]}>
          {categories.map((category) => (
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
        <ModalFormRegisterCategory
          isOpen={isOpen}
          onCancel={() => setIsOpen(false)}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
        />
      </footer>
    </LayoutTemplate>
  );
};

export default CategoryContainer;

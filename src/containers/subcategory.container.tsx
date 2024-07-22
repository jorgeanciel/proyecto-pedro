import { useEffect, useState } from "react";
import { SubCategoryServices } from "../services/subcategory.services";
import { RequestCreateSubCategory } from "../types/subcategory/subcategory.interface";
import LayoutTemplate from "../components/templates/home-template/home-template";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import ModalFormRegisterSubCategory from "../components/templates/register-subcategory/modal-form-register-subcategory";
import { TDropdownOption } from "../components/molecules/dropdown";
import { CategoryServices } from "../services/category.services";

const SubCategoryContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<TDropdownOption[]>([]);

  const subCategoryServices = new SubCategoryServices();
  const categoryServices = new CategoryServices();

  const getCategories = async () => {
    const resultCategories = await categoryServices.getCategories("1");
    setCategories(
      resultCategories.map((category) => ({
        value: category.id,
        name: category.nombre,
      }))
    );
  };

  const createSubCategory = async (nombre: string) => {
    try {
      await subCategoryServices.createSubCategory({
        nombre,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateSubCategory) => {
    createSubCategory(values.nombre);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Sub Categoria
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
        <ModalFormRegisterSubCategory
          categories={categories}
          isOpen={isOpen}
          onCancel={() => setIsOpen(false)}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
        />
      </main>
    </LayoutTemplate>
  );
};

export default SubCategoryContainer;

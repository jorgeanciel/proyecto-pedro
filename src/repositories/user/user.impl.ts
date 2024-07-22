import { IUserRepository } from "./user.repository";
import db from "./../../../src/utils/firebase/firebase-config";
import {
  TSignInUserParamsDto,
  TUserDto,
  TUserLogInParams,
  transformUserModelToUserDto,
  transformUserParamsDtoToUserModel,
} from "../../types/user/user.interface";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Exception } from "../../utils/errors/custom-errors";

export class ApiUserImpl implements IUserRepository {
  constructor() {}

  async saveLocalStorageUser(user: TUserDto): Promise<void> {
    localStorage.setItem("user", JSON.stringify(user));
  }

  async logInUser(userLogInParams: TUserLogInParams): Promise<TUserDto> {
    const collectionUsers = collection(db, "Users");
    const { user, password } = userLogInParams;
    try {
      const q = query(
        collectionUsers,
        where("user", "==", user),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Exception("User not found", 404);
      }

      const userDoc = querySnapshot.docs[0];
      await updateDoc(doc(collectionUsers, userDoc.id), {
        internalStatus: "logged",
      });

      return transformUserModelToUserDto(querySnapshot);
    } catch (error) {
      throw error;
    }
  }

  async signInUser(userSaveParamsDto: TSignInUserParamsDto): Promise<void> {
    const collectionUsers = collection(db, "Users", "");

    const userModel = transformUserParamsDtoToUserModel(userSaveParamsDto);

    try {
      await addDoc(collectionUsers, userModel);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}

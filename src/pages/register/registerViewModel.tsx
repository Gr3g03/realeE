import React from 'react';
import { useDispatch } from 'react-redux';
import IUser from '../../main/interfaces/IUser';
import onRegister from '../../main/store/stores/user/register.store.on-register';

export default interface registerVM {
  handleSubmit: (e: any) => void;
}

export default class register extends React.Component {
  public dispatch = useDispatch();

  public handleSubmit = (e: any) => {
    e.preventDefault();
    const firstName: string = e.target.firstName.value;
    const lastName: string = e.target.lastName.value;
    const email: string = e.target.email.value;
    const address: string = e.target.address.value;
    const phone: string = e.target.phone.value;
    const userName: string = e.target.userName.value;
    const avatar: string = e.target.avatar.value;
    const password = e.target.password.value;
    const data: IUser = {
      firstName,
      lastName,
      email,
      address,
      phone,
      userName,
      password,
      avatar,
    };
    this.dispatch(onRegister(data));
    console.log(data);
  };
}

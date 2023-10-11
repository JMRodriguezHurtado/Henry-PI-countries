import React from 'react';
import  FormInputs  from '../../components/formComponents/FormInputs'; 
import FormSelectors from '../../components/formComponents/FormSelectors';
import NavBar from '../../components/navBarComponents/navBar';
import create from '../../assets/create.gif';
import '../../components/formComponents/form.css';
import style from '../../components/formComponents/form.module.css';

export default function ActivityForm() {
  return (
    <div className={style.formPage}>
      <div className={style.nav}>
        <NavBar />
      </div>
      <img className={style.creativityGif} src={create} alt="" />
      <h1>Let's create an Activity</h1>
      <form>
        <FormInputs /> 
        <FormSelectors/>
      </form>
    </div>
  );
}
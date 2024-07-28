import payments from '../../payments.json';
//import css from './App.module.css';

import PaymentList from '../PaymentLis/PaymentLis.jsx';
import PageTittle from '../PageTitle/PageTitle.jsx';

export default function App() {

  return (
    <>
      <PageTittle text="Payments" />
      <PaymentList payments={payments} />
    </>
  );
}

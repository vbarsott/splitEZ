import React, { useContext } from 'react';
import { GroupsContext } from '../contexts/GroupsContext';

const Result = () => {
  const { groups, expenses } = useContext(GroupsContext);

  let total = 0;
  let groupsBalances = groups.slice();
  let numberOfPeople = 0;

  groupsBalances.map((gb) => {
    gb.totalPaid = 0;
    gb.balance = 0;
    numberOfPeople = numberOfPeople + gb.qty;
  });

  expenses.map((expense) => {
    total = total + expense.amount;
    const group = groupsBalances.find((gb) => gb.name === expense.who);
    group.totalPaid = group.totalPaid + expense.amount;
  });

  const valuePerPerson = total / numberOfPeople;
  groupsBalances.map((gb) => {
    gb.balance = gb.totalPaid - gb.qty * valuePerPerson;
  });

  return (
    <>
      <div className='min-vh-50 py-4'>
        <div className='container'>
          <h2 className='fs-5 text-primary mb-2'>Step 3: Check the result</h2>

          <div className='container'>
            <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
              <div className='col-6'>
                <p className='fs-6'>Total:</p>
              </div>
              <div className='col-6'>
                <p className='text-end'>CA$ {total.toFixed(2)}</p>
              </div>
            </div>

            <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
              <div className='col-6'>
                <p className='fs-6'>Value per person:</p>
              </div>
              <div className='col-6'>
                <p className='text-end'>CA$ {valuePerPerson.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col-12'>
              <div className='border border-primary rounded-3 p-1 min-vh-10'>
                <h2 className='fs-5 text-primary mb-2'>Result</h2>
                {groupsBalances.map((gb) => (
                  <div key={gb.name}>
                    <p>
                      {gb.name}: CA$ {gb.balance.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;

import React from 'react';

const Result = ({ groups, expenses }) => {
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
      <div className='container py-4'>
        <h2 className='fs-5 text-primary mb-2'>Result</h2>

        <div className='row mb-2'>
          <div className='col-12'>
            <p className='text-secondary'>Total:</p>
          </div>
          <div className='col-12'>
            <div className='border border-primary rounded-3 p-1'>
              <p>CA$ {total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className='row mb-2'>
          <div className='col-12'>
            <p className='text-secondary'>Value per person:</p>
          </div>
          <div className='col-12'>
            <div className='border border-primary rounded-3 p-1'>
              <p>CA$ {valuePerPerson.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className='row mb-2'>
          <div className='col-12'>
            <p className='text-secondary'>Participants:</p>
          </div>
          <div className='col-12'>
            <div className='border border-primary rounded-3 p-1'>
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
    </>
  );
};

export default Result;

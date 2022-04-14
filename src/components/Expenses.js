import React, { useContext } from 'react';
import { GroupsContext } from '../contexts/GroupsContext';

const Expenses = () => {
  const { groups, expenses, setExpenses } = useContext(GroupsContext);

  let whoPaid = '';
  let whatWasBought = '';
  let amountPaid = 0;

  const handleAddExpense = (e) => {
    e.preventDefault();
    const expense = { who: whoPaid, what: whatWasBought, amount: amountPaid };
    setExpenses([...expenses, expense]);
  };

  return (
    <>
      <div className='min-vh-50 py-4'>
        <div className='container'>
          <h2 className='fs-5 text-primary mb-2'>Step 2: Add the expenses</h2>

          <form>
            <div className='container'>
              <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
                <div className='col-12 mb-2'>
                  <label className='fs-6'>Who</label>
                </div>
                <div className='col-12 mb-2'>
                  <select
                    className='form-select'
                    aria-label='groups names options'
                    id='whoPaid'
                    onChange={(e) => (whoPaid = e.target.value)}>
                    <option>Select one group</option>
                    {groups.map((g) => (
                      <option key={g.name} value={g.name}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='col-12 mb-2'>
                  <label>How much</label>
                </div>
                <div className='col-12 mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='CA$'
                    aria-label='amount'
                    id='amountPaid'
                    onChange={(e) => (amountPaid = +e.target.value)}
                  />
                </div>

                <div className='col-12 mb-2'>
                  <label>What</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Description'
                    aria-label='item description'
                    id='whatWasBought'
                    onChange={(e) => (whatWasBought = e.target.value)}
                  />
                </div>

                <div className='col-12 addBtn text-center mt-2'>
                  <button
                    className='btn btn-primary link-light'
                    onClick={handleAddExpense}>
                    Add expense
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className='container'>
            <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
              <h2 className='fs-5 text-primary mb-2'>Expenses</h2>

              {expenses.map((exp) => (
                <div
                  key={exp.what}
                  className='d-flex justify-content-between align-items-center my-2'>
                  {exp.who}: {exp.what} (CA$ {exp.amount.toFixed(2)})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;

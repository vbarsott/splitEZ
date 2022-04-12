import React from 'react';

const Expenses = ({ groups, expenses, setExpenses }) => {
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
              {expenses.map((exp) => (
                <div key={exp.what}>
                  {exp.who}: {exp.what} (CA$ {exp.amount})
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

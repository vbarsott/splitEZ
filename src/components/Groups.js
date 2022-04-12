import React from 'react';

const Groups = ({ groups, setGroups }) => {
  let groupName = '';
  let numberOfPeople = 0;

  const handleAddGroup = (e) => {
    e.preventDefault();
    const group = { name: groupName, qty: numberOfPeople };
    setGroups([...groups, group]);
  };

  return (
    <>
      <div className='min-vh-50 py-4'>
        <div className='container'>
          <h2 className='fs-5 text-primary mb-2'>Step 1: Create a group</h2>

          <form>
            <div className='container'>
              <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
                <div className='col-12 mb-2'>
                  <label className='fs-6'>Group name:</label>
                </div>
                <div className='col-12 mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    id='groupName'
                    onChange={(e) => (groupName = e.target.value)}
                    aria-label='group name'
                  />
                </div>

                <div className='col-8 mb-2'>
                  <label>Number of people:</label>
                </div>
                <div className='col-4 mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    id='numberOfPeople'
                    onChange={(e) => (numberOfPeople = +e.target.value)}
                    aria-label='number of people'
                  />
                </div>

                <div className='col-12 addBtn text-center mt-2'>
                  <button
                    className='btn btn-primary link-light '
                    onClick={handleAddGroup}>
                    Add group
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className='container'>
            <div className='row align-items-center border border-primary rounded-3 mb-2 py-2'>
              <h2 className='fs-5 text-primary mb-2'>Groups</h2>
              {groups.map((g) => (
                <div key={g.name}>
                  {g.name} ({g.qty} people)
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;

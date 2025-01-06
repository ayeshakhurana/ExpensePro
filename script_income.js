const incomeList = document.getElementById('income-list');

    function addIncome() {
      const source = document.getElementById('incomeSource').value;
      const amount = document.getElementById('incomeAmount').value;
      const date = document.getElementById('incomeDate').value;

      if (!source || !amount || !date) {
        alert('Please fill in all fields.');
        return;
      }

      const incomeItem = document.createElement('div');
      incomeItem.className = 'border p-3 rounded mb-3 bg-light shadow-sm';
      incomeItem.innerHTML = `
        <h5>${source}</h5>
        <p>Amount: $${amount}</p>
        <p>Date: ${date}</p>
      `;
      incomeList.appendChild(incomeItem);

      document.getElementById('income-form').reset();
    }
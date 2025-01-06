function fetchSuggestions() {
    const suggestionsDiv = document.getElementById('trading-suggestions');
    suggestionsDiv.innerHTML = '<p class="text-muted text-center">Fetching data...</p>';

    // Simulating fetching data from an API
    setTimeout(() => {
      const suggestions = [
        { stock: "AAPL", action: "Buy", price: 180 },
        { stock: "GOOGL", action: "Hold", price: 2900 },
        { stock: "TSLA", action: "Sell", price: 780 },
        { stock: "MSFT", action: "Buy", price: 330 }
      ];

      suggestionsDiv.innerHTML = suggestions
        .map(
          suggestion =>
            `<div class="border-bottom py-2">
              <h5>${suggestion.stock}</h5>
              <p>Action: <strong>${suggestion.action}</strong></p>
              <p>Target Price: $${suggestion.price}</p>
            </div>`
        )
        .join("");
    }, 1500);
  }
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api.reliancehmo.com/v3/providers';
  const hospitalsTable = document.querySelector('#hospitalsTable tbody');
  const searchInput = document.getElementById('search');
  const loading = document.getElementById('loading');
  const pagination = document.getElementById('pagination');
  const pageInfo = document.getElementById('pageInfo');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');

  let hospitals = [];
  let currentPage = 1;
  const itemsPerPage = 10;

  function fetchHospitals() {
      loading.style.display = 'block';
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              hospitals = data.data;
              displayHospitals(hospitals, currentPage);
          })
          .catch(error => console.error('Error fetching hospitals:', error))
          .finally(() => loading.style.display = 'none');
  }

  function displayHospitals(hospitals, page) {
      const start = (page - 1) * itemsPerPage;
      const end = page * itemsPerPage;
      const paginatedHospitals = hospitals.slice(start, end);

      hospitalsTable.innerHTML = paginatedHospitals.map((hospital, index) => `
          <tr>
              <td>${start + index + 1}</td>
              <td>${hospital.name}</td>
              <td>${hospital.state.name}</td>
              <td><a href="hospital-details.html?id=${hospital.id}">View</a></td>
          </tr>
      `).join('');

      updatePagination(page, Math.ceil(hospitals.length / itemsPerPage));
  }

  // Update pagination controls
  function updatePagination(page, totalPages) {
      pageInfo.textContent = `Page ${page} of ${totalPages}`;
      prevPageBtn.disabled = page <= 1;
      nextPageBtn.disabled = page >= totalPages;
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredHospitals = hospitals.filter(hospital =>
          hospital.name.toLowerCase().includes(searchTerm) ||
          hospital.state.name.toLowerCase().includes(searchTerm)
      );
      currentPage = 1;
      displayHospitals(filteredHospitals, currentPage);
  });

  prevPageBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          displayHospitals(hospitals, currentPage);
      }
  });

  nextPageBtn.addEventListener('click', () => {
      if (currentPage < Math.ceil(hospitals.length / itemsPerPage)) {
          currentPage++;
          displayHospitals(hospitals, currentPage);
      }
  });

  fetchHospitals();
});


  const searchInput = document.getElementById('programSearch');
  const filterSelect = document.getElementById('programFilter');
  const programs = document.querySelectorAll('.swiper-slide');
  const stickyFilter = document.querySelector('.bd-sticky-filter');

  // 🧩 Filter + Search Logic
  function filterPrograms() {
    const searchText = searchInput.value.toLowerCase();
    const selectedAge = filterSelect.value;

    programs.forEach(program => {
      const title = program.querySelector('.bd-program-title a').textContent.toLowerCase();
      const ageText = program.querySelector('.bd-program-info-title').innerText.toLowerCase();

      const matchesSearch = title.includes(searchText);
      const matchesFilter = selectedAge === "all" || ageText.includes(selectedAge);

      program.style.display = (matchesSearch && matchesFilter) ? "block" : "none";
    });
  }

  searchInput.addEventListener('input', filterPrograms);
  filterSelect.addEventListener('change', filterPrograms);

  // 🧲 Sticky bar animation on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      stickyFilter.classList.add('scrolled');
    } else {
      stickyFilter.classList.remove('scrolled');
    }
  });


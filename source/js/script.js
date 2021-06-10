// файл скрипта


document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
  this.querySelector('.custom-select').classList.toggle('open');
})

// при клике на селект добавляется/убирается класс open

for (const option of document.querySelectorAll(".custom-option")) {
  // находим коллекцию вариантов селекта
  option.addEventListener('click', function() {
    // при клике на вариант селекта
      if (!this.classList.contains('selected')) {
        // если у него нет класса селектед
          this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select').querySelector('.custom-select__trigger p').innerHTML = this.innerHTML;
      }
  })
}

fetch('clubs.json')
  .then(response => response.json())
  .then(clubs => {
    const clubList = document.getElementById('club-list');
    clubs.forEach(club => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = club.link;
      link.textContent = club.name;
      link.target = '_blank'; // Открывать в новом окне
      listItem.appendChild(link);
      clubList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных о клубах:', error);
  });
/**Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции. */

  /**Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру: */

  /**Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку. */

  /**Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска) */
  let musicCollection = {
    albums: [
      { title: 'Альбом 1', artist: 'Исполнитель 1', year: 2020 },
      { title: 'Альбом 2', artist: 'Исполнитель 2', year: 2018 },
      { title: 'Альбом 3', artist: 'Исполнитель 3', year: 2021 }
    ],
    [Symbol.iterator]() {
      const albums = this.albums;
      let currentIndex = 0;
      return {
        next() {
          if (currentIndex < albums.length) {
            return { value: albums[currentIndex++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }
  
import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=123';

axios.get(url)
  .then(function(response) {

    // interfaceを作るとカスタムの型ルールを作る事ができる
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[] = response.data;
    data = [
      {
      id: 1,
      title: 'title',
      description: 'test'
      }
    ]
    console.log(data);
  })
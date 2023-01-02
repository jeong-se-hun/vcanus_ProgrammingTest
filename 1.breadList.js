class Bread {
  constructor(breadType, recipe) {
    this.breadType = breadType;
    this.recipe = recipe;
  }
}

const breadList = [];

const breadListOutput = async () => {
  const breadInfoRequest = await fetch('./data/bread.json')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));

  if (!breadInfoRequest) return;

  for (const bread of breadInfoRequest) {
    breadList.push(new Bread(bread.breadType, bread.recipe));
  }

  for (const bread of breadList) {
    console.log(bread);
  }
};

breadListOutput();

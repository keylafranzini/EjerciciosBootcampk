import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-header',
  templateUrl: './tabs-header.component.html',
  styleUrls: ['./tabs-header.component.sass']
})
export class TabsHeaderComponent implements OnInit {

  public tabs: Tabs[] = [

    {
      title: "TAB 1",
      body: "1. Sweet roll jujubes liquorice jujubes marzipan toffee carrot cake tart. "
    },
    {
      title: "TAB 2",
      body: "2. Soufflé sweet roll candy donut marzipan. Pastry toffee candy canes sweet roll jelly. Lemon drops cookie caramels. Candy cupcake pastry jelly beans topping cookie chupa chups. Cheesecake danish apple pie pie toffee gingerbread. Jelly-o oat cake brownie gummies. Candy powder pie apple pie lollipop jelly beans. "
    },
    {
      title: "TAB 3",
      body: "3. Cake candy canes gummies. Jujubes chocolate gummi bears tart ice cream fruitcake gummi bears. Brownie icing cake croissant cookie jelly beans marshmallow lemon drops pie. Chupa chups jelly beans brownie soufflé. Pudding danish apple pie."
    },
    {
      title: "TAB 4",
      body: "4. Dragée gummies powder candy canes jelly bonbon jelly beans oat cake gummies. Gummi bears sugar plum pastry pastry toffee croissant. Cake wafer cupcake marshmallow brownie. Bonbon jelly-o carrot cake cotton candy topping powder jelly beans jujubes cake. Cake sweet cheesecake."
    },
    {
      title: "TAB 5",
      body: "5. Sweet roll jujubes liquorice jujubes marzipan toffee carrot cake tart. Dessert caramels marzipan. Chocolate cake lemon drops sweet lollipop dragée topping croissant. Sweet candy cake bear claw chocolate croissant chupa chups. Marzipan tiramisu fruitcake powder. Cake oat cake jelly dragée chocolate cake cake pie wafer topping. Chocolate cake sugar plum caramels bear claw. Ice cream ice cream ice cream chocolate cake cake halvah chocolate cake gummi bears. Wafer jelly carrot cake halvah dessert tiramisu topping cake lollipop. Sugar plum sweet cake oat cake halvah dragée carrot cake liquorice lemon drops. Gummies dessert candy cupcake chocolate tart jelly. Ice cream liquorice marshmallow chocolate bar cake caramels. Tootsie roll bear claw wafer fruitcake."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Tabs {
  title: string;
  body: string;
}

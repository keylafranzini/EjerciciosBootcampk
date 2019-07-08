import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqsListComponent implements OnInit {

  public faqs: Faq[] = [
    {
      title: "Cupcake ipsum dolor sit amet",
      body: "Oat cake apple pie cotton candy toffee ice cream cotton candy marshmallow brownie jelly-o. Pie carrot cake soufflé. Tart cake cupcake cupcake bear claw brownie. Bonbon brownie chocolate bar halvah chocolate cake liquorice lollipop cheesecake toffee. Tootsie roll lollipop marzipan gingerbread jujubes pudding. Caramels caramels powder."
    },
    {
      title: "Soufflé sweet roll candy donut marzipan",
      body: "Pastry toffee candy canes sweet roll jelly. Lemon drops cookie caramels. Candy cupcake pastry jelly beans topping cookie chupa chups. Cheesecake danish apple pie pie toffee gingerbread. Jelly-o oat cake brownie gummies. Candy powder pie apple pie lollipop jelly beans. Muffin cookie oat cake tart. Soufflé pastry pie bear claw chocolate cake lemon drops. Sweet pudding dragée."
    },
    {
      title: "Tiramisu bonbon cupcake dragée candy pie sweet sweet jujubes",
      body: "Cake gingerbread muffin sweet icing cheesecake gingerbread. Bonbon lemon drops biscuit wafer cheesecake halvah soufflé liquorice marzipan. Pudding pudding fruitcake cake dessert dragée. Candy dessert gingerbread jujubes fruitcake jelly-o cookie. Ice cream fruitcake jelly beans. Lemon drops cheesecake biscuit marshmallow sesame snaps soufflé. "
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Faq {
  title: string;
  body: string;
}

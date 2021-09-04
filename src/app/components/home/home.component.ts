import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse } from 'src/app/models/api-response';
import { BootstrapStatic } from 'src/app/models/bootstrap-static';
import { Player } from 'src/app/models/player';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public bsResponse: BootstrapStatic;
  public playersList: Array<Player>;
  displayedColumns: string[] = ['image','second_name', 'first_name', 'now_cost','total', 'minutes', 'goals_scored', 'assists', 'clean_sheets', 'goals_scored', 'own_goals'];
  dataSource = ['one'];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.searchBsResponse()
    })
  }

  searchBsResponse(): void {
    this.httpService
      .getBootstrapStaticList()
      .subscribe((bsList: APIResponse<Player>)=> {
        //this.bsResponse = bsList.results;
        this.playersList = bsList['elements'];
        console.log(bsList)
      })
  }
}

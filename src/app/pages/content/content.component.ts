import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
import { __values } from 'tslib';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string | undefined = ""
  contentTitle: string | undefined = ""
  contentDescription: string | undefined = ""
  private id: string | null = "0"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setvaluesdataFakeContent(this.id)

  }
  setvaluesdataFakeContent(id: string | null) {
    const result = dataFake.filter(article =>
      article.id == id)[0]

    this.contentTitle = result.Title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }

}

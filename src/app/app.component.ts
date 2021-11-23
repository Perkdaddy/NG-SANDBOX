import { Component, VERSION, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  cleanup = [
    {
        "id": 0,
        "staffId": 1532419,
        "applicationId": 994624,
        "applicationQuestionId": 0,
        "applicationAnswerId": null,
        "explanation": null,
        "onDate": null,
        "question": {
            "id": 8,
            "text": "Has there been any change in your physical or mental health status that might adversely affect your ability to practice in your specialty?",
            "applicationQuestionCategoryId": 1,
            "applicationQuestionCategory": {
                "id": 1,
                "category": "Health Status",
                "organizationId": 0
            },
            "organizationId": 56536,
            "applicationTypeId": 1,
            "allowNotApplicable": false,
            "answerTypeId": 57,
            "possibleAnswers": [
                {
                    "answerId": 1,
                    "answerTypeId": 57,
                    "name": "Yes",
                    "sortOrder": 1,
                    "isAdverseAnswer": true,
                    "questionId": 0
                },
                {
                    "answerId": 2,
                    "answerTypeId": 57,
                    "name": "No",
                    "sortOrder": 2,
                    "isAdverseAnswer": false,
                    "questionId": 0
                }
            ],
            "sortOrder": 1
        },
        "answers": [
            {
                "answerId": 1,
                "onDate": "2021-11-23T17:04:01.633Z",
                "explanation": "retrt"
            }
        ]
    },
    {
        "id": 0,
        "staffId": 1532419,
        "applicationId": 994624,
        "applicationQuestionId": 0,
        "applicationAnswerId": null,
        "explanation": null,
        "onDate": null,
        "question": {
            "id": 9,
            "text": "Present Health Status:",
            "applicationQuestionCategoryId": 1,
            "applicationQuestionCategory": {
                "id": 1,
                "category": "Health Status",
                "organizationId": 0
            },
            "organizationId": 56536,
            "applicationTypeId": 1,
            "allowNotApplicable": false,
            "answerTypeId": 111,
            "possibleAnswers": [
                {
                    "answerId": 15,
                    "answerTypeId": 111,
                    "name": "Healthy",
                    "sortOrder": 1,
                    "isAdverseAnswer": false,
                    "questionId": 0
                },
                {
                    "answerId": 16,
                    "answerTypeId": 111,
                    "name": "New Physical Health Issues (Please Explain)",
                    "sortOrder": 2,
                    "isAdverseAnswer": true,
                    "questionId": 0
                },
                {
                    "answerId": 17,
                    "answerTypeId": 111,
                    "name": "New Mental Health Issues (Please Explain)",
                    "sortOrder": 3,
                    "isAdverseAnswer": true,
                    "questionId": 0
                },
                {
                    "answerId": 18,
                    "answerTypeId": 111,
                    "name": "Not Sure (Please Explain)",
                    "sortOrder": 4,
                    "isAdverseAnswer": true,
                    "questionId": 0
                }
            ],
            "sortOrder": 2
        },
        "answers": [
          {
              "answerId": 15,
              "onDate": "2021-11-19T17:03:26.973Z",
              "explanation": "tyhtry",
              "questionId": 9
          },
          {
              "answerId": 15,
              "onDate": "2021-11-20T17:03:26.977Z",
              "explanation": "trytrytry",
              "questionId": 9
          },
          {
              "answerId": 14,
              "onDate": "2021-11-23T17:03:26.977Z",
              "explanation": "trytrytry5",
              "questionId": 10
          }
      ]
    }
  ];
  users = [
    {
        "answerId": 15,
        "onDate": "2021-11-19T17:03:26.973Z",
        "explanation": "tyhtry",
        "questionId": 9
    },
    {
        "answerId": 15,
        "onDate": "2021-11-20T17:03:26.977Z",
        "explanation": "trytrytry",
        "questionId": 9
    },
    {
        "answerId": 14,
        "onDate": "2021-11-23T17:03:26.977Z",
        "explanation": "trytrytry5",
        "questionId": 10
    }
]
 uniqueUsersByID = _.uniqBy(this.users,'answerId')
  uniqueUsers = _.uniqWith(this.users, _.isEqual);//removed complete duplicates

  poopy = [];

  ngOnInit() {

   this.cleanup.forEach(question => {
      question.answers = _.uniqBy(question.answers,'answerId')
      this.poopy.push(question);
    })
  }
}


export function mockDataCall() {

      return Promise.resolve(mocks.pulse_modules_list)

}

const mocks = {
  "base_module": {
    "id": 82,
    "all_descendents": [84, 85, 86, 87, 89, 90, 91, 92, 94, 95, 83, 88, 93],
    "children": [83, 88, 93],
    "name": "Digital Front Door",
    "benchmark": {
      "score_mean": 1.71,
      "score_percent": 34,
      "score_rounded": 1,
      "score_text": "Basic +",
      "sample_size": 0,
      "org_count": 52
    },
    "is_survey_complete": true,
    "parent_id": null,
    "parents": [],
    "progress": {
      "answered_questions": 10,
      "total_questions": 10,
      "percent_complete": 100
    },
    "scoring": {
      "score_mean": 1.4,
      "score_text": "Basic",
      "score_rounded": 2,
      "score_percent": 28
    },
    "type": "module",
    "description": "Hospitals and health systems increasingly compete for the commercial consumer against new entrants and big tech. Consumers want easy and convenient ways to find, schedule, and access care, on par with their experiences in retail, banking, and travel. Hospitals and health systems need to provide a modern, tech-enabled point of entry - a Digital Front Door.",
    "modules": [{
      "id": 83,
      "all_descendents": [84, 85, 86, 87],
      "children": [84, 85, 86, 87],
      "name": "Search to Schedule",
      "benchmark": {
        "score_mean": 2.34,
        "score_percent": 47,
        "score_rounded": 2,
        "score_text": "Basic +",
        "sample_size": 0,
        "org_count": 52
      },
      "is_survey_complete": true,
      "parent_id": 82,
      "parents": [82],
      "progress": {
        "answered_questions": 4,
        "total_questions": 4,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 2,
        "score_text": "Basic +",
        "score_rounded": 2,
        "score_percent": 40
      },
      "type": "module",
      "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
      "questions": [{
        "id": 84,
        "name": "Provider Directory",
        "benchmark": {
          "score_mean": 2.44,
          "score_percent": 49,
          "score_text": "Basic +",
          "score_rounded": 2,
          "org_count": 52
        },
        "parent_id": 83,
        "parents": [83, 82],
        "score": 3,
        "topic_id": 1392,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/1392",
        "type": "question"
      }, {
        "id": 85,
        "name": "Provider Search",
        "benchmark": {
          "score_mean": 2.54,
          "score_percent": 51,
          "score_text": "Intermediate",
          "score_rounded": 3,
          "org_count": 52
        },
        "parent_id": 83,
        "parents": [83, 82],
        "score": 3,
        "topic_id": 72,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/72",
        "type": "question"
      }, {
        "id": 86,
        "name": "Ratings & Reviews Transparency",
        "benchmark": {
          "score_mean": 2.17,
          "score_percent": 43,
          "score_text": "Basic +",
          "score_rounded": 2,
          "org_count": 52
        },
        "parent_id": 83,
        "parents": [83, 82],
        "score": 1,
        "topic_id": 362,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/362",
        "type": "question"
      }, {
        "id": 87,
        "name": "Consumer Scheduling",
        "benchmark": {
          "score_mean": 2.21,
          "score_percent": 44,
          "score_text": "Basic +",
          "score_rounded": 2,
          "org_count": 52
        },
        "parent_id": 83,
        "parents": [83, 82],
        "score": 1,
        "topic_id": 103,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/103",
        "type": "question"
      }],
      "modules": []
    }, {
      "id": 88,
      "all_descendents": [89, 90, 91, 92],
      "children": [89, 90, 91, 92],
      "name": "Triage, Navigate, & Treat",
      "benchmark": {
        "score_mean": 1.13,
        "score_percent": 23,
        "score_rounded": 1,
        "score_text": "Basic",
        "sample_size": 0,
        "org_count": 51
      },
      "is_survey_complete": true,
      "parent_id": 82,
      "parents": [82],
      "progress": {
        "answered_questions": 4,
        "total_questions": 4,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 0.5,
        "score_text": "Basic",
        "score_rounded": 1,
        "score_percent": 10
      },
      "type": "module",
      "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
      "questions": [{
        "id": 89,
        "name": "Virtual Triage",
        "benchmark": {
          "score_mean": 0.59,
          "score_percent": 12,
          "score_text": "Basic",
          "score_rounded": 1,
          "org_count": 51
        },
        "parent_id": 88,
        "parents": [88, 82],
        "score": 0,
        "topic_id": 367,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/367",
        "type": "question"
      }, {
        "id": 90,
        "name": "Low-Acuity Care Navigation",
        "benchmark": {
          "score_mean": 0.92,
          "score_percent": 18,
          "score_text": "Basic",
          "score_rounded": 1,
          "org_count": 50
        },
        "parent_id": 88,
        "parents": [88, 82],
        "score": 0,
        "topic_id": 1414,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/1414",
        "type": "question"
      }, {
        "id": 91,
        "name": "Virtual Visits - Asynchronous",
        "benchmark": {
          "score_mean": 1.26,
          "score_percent": 25,
          "score_text": "Basic",
          "score_rounded": 1,
          "org_count": 50
        },
        "parent_id": 88,
        "parents": [88, 82],
        "score": 1,
        "topic_id": 370,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/370",
        "type": "question"
      }, {
        "id": 92,
        "name": "Virtual Visits - Synchronous",
        "benchmark": {
          "score_mean": 1.77,
          "score_percent": 35,
          "score_text": "Basic +",
          "score_rounded": 2,
          "org_count": 48
        },
        "parent_id": 88,
        "parents": [88, 82],
        "score": 1,
        "topic_id": 1798,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/1798",
        "type": "question"
      }],
      "modules": []
    }, {
      "id": 93,
      "all_descendents": [94, 95],
      "children": [94, 95],
      "name": "Consumer Interactions",
      "benchmark": {
        "score_mean": 1.45,
        "score_percent": 29,
        "score_rounded": 2,
        "score_text": "Basic",
        "sample_size": 0,
        "org_count": 32
      },
      "is_survey_complete": true,
      "parent_id": 82,
      "parents": [82],
      "progress": {
        "answered_questions": 2,
        "total_questions": 2,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 2,
        "score_text": "Basic +",
        "score_rounded": 1,
        "score_percent": 40
      },
      "type": "module",
      "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
      "questions": [{
        "id": 94,
        "name": "Unguided Interactions",
        "benchmark": {
          "score_mean": 1.94,
          "score_percent": 39,
          "score_text": "Basic +",
          "score_rounded": 2,
          "org_count": 32
        },
        "parent_id": 93,
        "parents": [93, 82],
        "score": 2,
        "topic_id": 1831,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/1831",
        "type": "question"
      }, {
        "id": 95,
        "name": "Guided Interactions",
        "benchmark": {
          "score_mean": 0.97,
          "score_percent": 19,
          "score_text": "Basic",
          "score_rounded": 1,
          "org_count": 32
        },
        "parent_id": 93,
        "parents": [93, 82],
        "score": 2,
        "topic_id": 1832,
        "owner_id": 664,
        "url": "/pulse/2/hs/2593/question/1832",
        "type": "question"
      }],
      "modules": []
    }]
  },
  "pulse_modules_indexed": {
    "82": {
      "id": 82,
      "all_descendents": [84, 85, 86, 87, 89, 90, 91, 92, 94, 95, 83, 88, 93],
      "children": [83, 88, 93],
      "name": "Digital Front Door",
      "benchmark": {
        "score_mean": 1.71,
        "score_percent": 34,
        "score_rounded": 1,
        "score_text": "Basic +",
        "sample_size": 0,
        "org_count": 52
      },
      "is_survey_complete": true,
      "parent_id": null,
      "parents": [],
      "progress": {
        "answered_questions": 10,
        "total_questions": 10,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 1.4,
        "score_text": "Basic",
        "score_rounded": 2,
        "score_percent": 28
      },
      "type": "module",
      "description": "Hospitals and health systems increasingly compete for the commercial consumer against new entrants and big tech. Consumers want easy and convenient ways to find, schedule, and access care, on par with their experiences in retail, banking, and travel. Hospitals and health systems need to provide a modern, tech-enabled point of entry - a Digital Front Door.",
      "modules": [83, 88, 93],
      "depth": 0
    },
    "83": {
      "id": 83,
      "all_descendents": [84, 85, 86, 87],
      "children": [84, 85, 86, 87],
      "name": "Search to Schedule",
      "benchmark": {
        "score_mean": 2.34,
        "score_percent": 47,
        "score_rounded": 2,
        "score_text": "Basic +",
        "sample_size": 0,
        "org_count": 52
      },
      "is_survey_complete": true,
      "parent_id": 82,
      "parents": [82],
      "progress": {
        "answered_questions": 4,
        "total_questions": 4,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 2,
        "score_text": "Basic +",
        "score_rounded": 2,
        "score_percent": 40
      },
      "type": "module",
      "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
      "questions": [84, 85, 86, 87],
      "modules": [],
      "depth": 1
    },
    "84": {
      "id": 84,
      "name": "Provider Directory",
      "benchmark": {
        "score_mean": 2.44,
        "score_percent": 49,
        "score_text": "Basic +",
        "score_rounded": 2,
        "org_count": 52
      },
      "parent_id": 83,
      "parents": [83, 82],
      "score": 3,
      "topic_id": 1392,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/1392",
      "type": "question",
      "depth": 2
    },
    "85": {
      "id": 85,
      "name": "Provider Search",
      "benchmark": {
        "score_mean": 2.54,
        "score_percent": 51,
        "score_text": "Intermediate",
        "score_rounded": 3,
        "org_count": 52
      },
      "parent_id": 83,
      "parents": [83, 82],
      "score": 3,
      "topic_id": 72,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/72",
      "type": "question",
      "depth": 2
    },
    "86": {
      "id": 86,
      "name": "Ratings & Reviews Transparency",
      "benchmark": {
        "score_mean": 2.17,
        "score_percent": 43,
        "score_text": "Basic +",
        "score_rounded": 2,
        "org_count": 52
      },
      "parent_id": 83,
      "parents": [83, 82],
      "score": 1,
      "topic_id": 362,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/362",
      "type": "question",
      "depth": 2
    },
    "87": {
      "id": 87,
      "name": "Consumer Scheduling",
      "benchmark": {
        "score_mean": 2.21,
        "score_percent": 44,
        "score_text": "Basic +",
        "score_rounded": 2,
        "org_count": 52
      },
      "parent_id": 83,
      "parents": [83, 82],
      "score": 1,
      "topic_id": 103,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/103",
      "type": "question",
      "depth": 2
    },
    "88": {
      "id": 88,
      "all_descendents": [89, 90, 91, 92],
      "children": [89, 90, 91, 92],
      "name": "Triage, Navigate, & Treat",
      "benchmark": {
        "score_mean": 1.13,
        "score_percent": 23,
        "score_rounded": 1,
        "score_text": "Basic",
        "sample_size": 0,
        "org_count": 51
      },
      "is_survey_complete": true,
      "parent_id": 82,
      "parents": [82],
      "progress": {
        "answered_questions": 4,
        "total_questions": 4,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 0.5,
        "score_text": "Basic",
        "score_rounded": 1,
        "score_percent": 10
      },
      "type": "module",
      "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
      "questions": [89, 90, 91, 92],
      "modules": [],
      "depth": 1
    },
    "89": {
      "id": 89,
      "name": "Virtual Triage",
      "benchmark": {
        "score_mean": 0.59,
        "score_percent": 12,
        "score_text": "Basic",
        "score_rounded": 1,
        "org_count": 51
      },
      "parent_id": 88,
      "parents": [88, 82],
      "score": 0,
      "topic_id": 367,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/367",
      "type": "question",
      "depth": 2
    },
    "90": {
      "id": 90,
      "name": "Low-Acuity Care Navigation",
      "benchmark": {
        "score_mean": 0.92,
        "score_percent": 18,
        "score_text": "Basic",
        "score_rounded": 1,
        "org_count": 50
      },
      "parent_id": 88,
      "parents": [88, 82],
      "score": 0,
      "topic_id": 1414,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/1414",
      "type": "question",
      "depth": 2
    },
    "91": {
      "id": 91,
      "name": "Virtual Visits - Asynchronous",
      "benchmark": {
        "score_mean": 1.26,
        "score_percent": 25,
        "score_text": "Basic",
        "score_rounded": 1,
        "org_count": 50
      },
      "parent_id": 88,
      "parents": [88, 82],
      "score": 1,
      "topic_id": 370,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/370",
      "type": "question",
      "depth": 2
    },
    "92": {
      "id": 92,
      "name": "Virtual Visits - Synchronous",
      "benchmark": {
        "score_mean": 1.77,
        "score_percent": 35,
        "score_text": "Basic +",
        "score_rounded": 2,
        "org_count": 48
      },
      "parent_id": 88,
      "parents": [88, 82],
      "score": 1,
      "topic_id": 1798,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/1798",
      "type": "question",
      "depth": 2
    },
    "93": {
      "id": 93,
      "all_descendents": [94, 95],
      "children": [94, 95],
      "name": "Consumer Interactions",
      "benchmark": {
        "score_mean": 1.45,
        "score_percent": 29,
        "score_rounded": 2,
        "score_text": "Basic",
        "sample_size": 0,
        "org_count": 32
      },
      "is_survey_complete": true,
      "parent_id": 82,
      "parents": [82],
      "progress": {
        "answered_questions": 2,
        "total_questions": 2,
        "percent_complete": 100
      },
      "scoring": {
        "score_mean": 2,
        "score_text": "Basic +",
        "score_rounded": 1,
        "score_percent": 40
      },
      "type": "module",
      "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
      "questions": [94, 95],
      "modules": [],
      "depth": 1
    },
    "94": {
      "id": 94,
      "name": "Unguided Interactions",
      "benchmark": {
        "score_mean": 1.94,
        "score_percent": 39,
        "score_text": "Basic +",
        "score_rounded": 2,
        "org_count": 32
      },
      "parent_id": 93,
      "parents": [93, 82],
      "score": 2,
      "topic_id": 1831,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/1831",
      "type": "question",
      "depth": 2
    },
    "95": {
      "id": 95,
      "name": "Guided Interactions",
      "benchmark": {
        "score_mean": 0.97,
        "score_percent": 19,
        "score_text": "Basic",
        "score_rounded": 1,
        "org_count": 32
      },
      "parent_id": 93,
      "parents": [93, 82],
      "score": 2,
      "topic_id": 1832,
      "owner_id": 664,
      "url": "/pulse/2/hs/2593/question/1832",
      "type": "question",
      "depth": 2
    }
  },
  "pulse_modules_list": [{
    "id": 82,
    "all_descendents": [84, 85, 86, 87, 89, 90, 91, 92, 94, 95, 83, 88, 93],
    "children": [83, 88, 93],
    "name": "Digital Front Door",
    "benchmark": {
      "score_mean": 1.71,
      "score_percent": 34,
      "score_rounded": 1,
      "score_text": "Basic +",
      "sample_size": 0,
      "org_count": 52
    },
    "is_survey_complete": true,
    "parent_id": null,
    "parents": [],
    "progress": {
      "answered_questions": 10,
      "total_questions": 10,
      "percent_complete": 100
    },
    "scoring": {
      "score_mean": 1.4,
      "score_text": "Basic",
      "score_rounded": 2,
      "score_percent": 28
    },
    "type": "module",
    "description": "Hospitals and health systems increasingly compete for the commercial consumer against new entrants and big tech. Consumers want easy and convenient ways to find, schedule, and access care, on par with their experiences in retail, banking, and travel. Hospitals and health systems need to provide a modern, tech-enabled point of entry - a Digital Front Door.",
    "modules": [83, 88, 93],
    "depth": 0
  }, {
    "id": 83,
    "all_descendents": [84, 85, 86, 87],
    "children": [84, 85, 86, 87],
    "name": "Search to Schedule",
    "benchmark": {
      "score_mean": 2.34,
      "score_percent": 47,
      "score_rounded": 2,
      "score_text": "Basic +",
      "sample_size": 0,
      "org_count": 52
    },
    "is_survey_complete": true,
    "parent_id": 82,
    "parents": [82],
    "progress": {
      "answered_questions": 4,
      "total_questions": 4,
      "percent_complete": 100
    },
    "scoring": {
      "score_mean": 2,
      "score_text": "Basic +",
      "score_rounded": 2,
      "score_percent": 40
    },
    "type": "module",
    "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
    "questions": [84, 85, 86, 87],
    "modules": [],
    "depth": 1
  }, {
    "id": 84,
    "name": "Provider Directory",
    "benchmark": {
      "score_mean": 2.44,
      "score_percent": 49,
      "score_text": "Basic +",
      "score_rounded": 2,
      "org_count": 52
    },
    "parent_id": 83,
    "parents": [83, 82],
    "score": 3,
    "topic_id": 1392,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/1392",
    "type": "question",
    "depth": 2
  }, {
    "id": 85,
    "name": "Provider Search",
    "benchmark": {
      "score_mean": 2.54,
      "score_percent": 51,
      "score_text": "Intermediate",
      "score_rounded": 3,
      "org_count": 52
    },
    "parent_id": 83,
    "parents": [83, 82],
    "score": 3,
    "topic_id": 72,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/72",
    "type": "question",
    "depth": 2
  }, {
    "id": 86,
    "name": "Ratings & Reviews Transparency",
    "benchmark": {
      "score_mean": 2.17,
      "score_percent": 43,
      "score_text": "Basic +",
      "score_rounded": 2,
      "org_count": 52
    },
    "parent_id": 83,
    "parents": [83, 82],
    "score": 1,
    "topic_id": 362,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/362",
    "type": "question",
    "depth": 2
  }, {
    "id": 87,
    "name": "Consumer Scheduling",
    "benchmark": {
      "score_mean": 2.21,
      "score_percent": 44,
      "score_text": "Basic +",
      "score_rounded": 2,
      "org_count": 52
    },
    "parent_id": 83,
    "parents": [83, 82],
    "score": 1,
    "topic_id": 103,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/103",
    "type": "question",
    "depth": 2
  }, {
    "id": 88,
    "all_descendents": [89, 90, 91, 92],
    "children": [89, 90, 91, 92],
    "name": "Triage, Navigate, & Treat",
    "benchmark": {
      "score_mean": 1.13,
      "score_percent": 23,
      "score_rounded": 1,
      "score_text": "Basic",
      "sample_size": 0,
      "org_count": 51
    },
    "is_survey_complete": true,
    "parent_id": 82,
    "parents": [82],
    "progress": {
      "answered_questions": 4,
      "total_questions": 4,
      "percent_complete": 100
    },
    "scoring": {
      "score_mean": 0.5,
      "score_text": "Basic",
      "score_rounded": 1,
      "score_percent": 10
    },
    "type": "module",
    "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
    "questions": [89, 90, 91, 92],
    "modules": [],
    "depth": 1
  }, {
    "id": 89,
    "name": "Virtual Triage",
    "benchmark": {
      "score_mean": 0.59,
      "score_percent": 12,
      "score_text": "Basic",
      "score_rounded": 1,
      "org_count": 51
    },
    "parent_id": 88,
    "parents": [88, 82],
    "score": 0,
    "topic_id": 367,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/367",
    "type": "question",
    "depth": 2
  }, {
    "id": 90,
    "name": "Low-Acuity Care Navigation",
    "benchmark": {
      "score_mean": 0.92,
      "score_percent": 18,
      "score_text": "Basic",
      "score_rounded": 1,
      "org_count": 50
    },
    "parent_id": 88,
    "parents": [88, 82],
    "score": 0,
    "topic_id": 1414,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/1414",
    "type": "question",
    "depth": 2
  }, {
    "id": 91,
    "name": "Virtual Visits - Asynchronous",
    "benchmark": {
      "score_mean": 1.26,
      "score_percent": 25,
      "score_text": "Basic",
      "score_rounded": 1,
      "org_count": 50
    },
    "parent_id": 88,
    "parents": [88, 82],
    "score": 1,
    "topic_id": 370,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/370",
    "type": "question",
    "depth": 2
  }, {
    "id": 92,
    "name": "Virtual Visits - Synchronous",
    "benchmark": {
      "score_mean": 1.77,
      "score_percent": 35,
      "score_text": "Basic +",
      "score_rounded": 2,
      "org_count": 48
    },
    "parent_id": 88,
    "parents": [88, 82],
    "score": 1,
    "topic_id": 1798,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/1798",
    "type": "question",
    "depth": 2
  }, {
    "id": 93,
    "all_descendents": [94, 95],
    "children": [94, 95],
    "name": "Consumer Interactions",
    "benchmark": {
      "score_mean": 1.45,
      "score_percent": 29,
      "score_rounded": 2,
      "score_text": "Basic",
      "sample_size": 0,
      "org_count": 32
    },
    "is_survey_complete": true,
    "parent_id": 82,
    "parents": [82],
    "progress": {
      "answered_questions": 2,
      "total_questions": 2,
      "percent_complete": 100
    },
    "scoring": {
      "score_mean": 2,
      "score_text": "Basic +",
      "score_rounded": 1,
      "score_percent": 40
    },
    "type": "module",
    "description": "As hospitals and health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases hospitals and health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, organizations must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their Digital Front Door.",
    "questions": [94, 95],
    "modules": [],
    "depth": 1
  }, {
    "id": 94,
    "name": "Unguided Interactions",
    "benchmark": {
      "score_mean": 1.94,
      "score_percent": 39,
      "score_text": "Basic +",
      "score_rounded": 2,
      "org_count": 32
    },
    "parent_id": 93,
    "parents": [93, 82],
    "score": 2,
    "topic_id": 1831,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/1831",
    "type": "question",
    "depth": 2
  }, {
    "id": 95,
    "name": "Guided Interactions",
    "benchmark": {
      "score_mean": 0.97,
      "score_percent": 19,
      "score_text": "Basic",
      "score_rounded": 1,
      "org_count": 32
    },
    "parent_id": 93,
    "parents": [93, 82],
    "score": 2,
    "topic_id": 1832,
    "owner_id": 664,
    "url": "/pulse/2/hs/2593/question/1832",
    "type": "question",
    "depth": 2
  }]
};

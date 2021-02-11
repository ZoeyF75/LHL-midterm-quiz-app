import jQuery from 'jquery';
const $ = jQuery;
const qs = Document.querySelector;
const api = {};
const updateDom = {};
const state = {};
state.page = "home"; //update based off of url of page

api.getNavPages = () => {
  if (state.page === "home") {
    return ["Home", "All Quizzes"];
  } else if (state.page === "take") {
    return [];
  } else if (state.page === "make") {
    return [];
  } else if (state.page === "login") {
    return [];
  } else {
    return [];
  }
};

const _ = require('./makerStateFunction');


// setInterval(() => {
//   console.clear();
//   console.log(state);
// }, 5000);

// get all the quizzes
api.getRecentQuizzes = () => {
  $.getJSON('/api/', (response) => {
    state.recentQuizzes = response;
    updateDom.updateRecentQuizzes();
    return response;
  });
};

updateDom.updateRecentQuizzes = () => {
  const container = qs("");
  //update dom here
};

api.getQuizzesTakenByUser = () => {
  $.getJSON`'/api/quiz-taker/user/${id}`, (response) => {
    state.recentQuizzes = response;
    updateDom.updateQuizzesTaken();
    return response;
  }
};

api.getQuizById = () => {
  $.getJSON(`/api/quiz-taker/${id}`, (response) => {
    state.specificQuiz = response;
    updateDom.updateQuizById();
    return response;
  });
};

updateDom.updateQuizzesTaken = () => {
  const container = qs("");
  if (state.page === "home") {

  } else {

  }
  //update dom here
};

$.ajax({ url: `/api/quiz-taker/${id}/answer`, method: 'POST', data: /*onclick submitted data*/})
.then(() => {

})

$.ajax({ url: `/api/quiz-taker/${id}/score`, method: 'POST', data: /*onclick submitted data*/})
.then(() => {

})

$.ajax({ url: `/api/quiz-taker/${id}/delete`, method: 'POST', data: /*onclick submitted data*/})
.then(() => {

})

// api.getRecentQuizzes();
const updateState = (() => {
  return (action) => {
    const { actionType, data = null } = action;
    return api[actionType]({ data });
  };
})();

export default updateState;

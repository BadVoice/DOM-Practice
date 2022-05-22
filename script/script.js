document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.getElementById('btnOpenModal');
    const modalBlock = document.getElementById('modalBlock');
    const closeModal = document.getElementById('closeModal');
    const questionTitle = document.getElementById('question');
    const formAnswers = document.getElementById('formAnswers');
    const answerItem1 = document.getElementById('answerItem1');
    const answerItem2 = document.getElementById('answerItem2');
    const btnModalNext = document.getElementById('next');

    const questions = [{
            question: 'Какого цвета бургер вы хотите?',
            answers: [{
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: '/image/burgerBlack.png'
                }

            ]
        }

    ]



    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    })
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })

    const playTest = () => {
        let numberQestion = 0;

        const renderAnswers = (index) => {
            questions[index].answers.forEach(() => {

                const answerItem = document.createElement('div');

                answerItem.classList.add('answers-item, d-flex, flex-column')

                answerItem.innerHTML = `
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src=${answers.url} alt="burger">
                  <span>${answers.title}</span>
                </label>
              `;
                formAnswers.appendChild(answerItem);
            })
        }
        const renderQuestions = (indexQustion) => {
            questionTitle.textContent = `${questions[indexQustion].question}`;
            renderAnswers(indexQustion);
        }
        renderQuestions(numberQestion);

    }


    //      btnModalNext.addEventListener('click', () => ({
    //  if (id.answerItem1 = id(0)) {
    //        modalBlock.classList.remove('d-block')
    //    } else() {


    //     }

    //    }))
})
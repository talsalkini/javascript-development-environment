//Taken from: https://danmartensen.svbtle.com/how-to-write-mvc-without-a-framework
function Subject() {
    const observers = [];
    return {
        add: function(item) {
            observers.push(item);
        },
        removeAll: function() {
            observers.length = 0;
        },
        notifyObservers() {
            observers.forEach(elem => {
                elem.notify();
            });
        }
    };
}

function ToDoModel() {
    const subject = Subject(),
        list = [];
    return {
        getList: function() {
            return list;
        },
        add: function (text) {
            list.push({
                val: text,
                complete: false
            });
            subject.notifyObservers();
        },
        remove: function(index) {
            list.splice(index, 1);
            subject.notifyObservers();
        },
        complete: function(index, isComplete) {
            isComplete === true ?
                list[index].complete = true :
                list[index].complete = false;
            subject.notifyObservers();
        },
        // observer
        register: function(...args) {
            subject.removeAll();
            args.forEach(elem => {
                subject.add(elem);
            });
        }
    };
}

function ToDoView(model) {
    const appTemplateFnc =
             Handlebars.compile($('#todo-template').html());
    $('#app-main').html(appTemplateFnc());

    const DOM = {
        input: $('#todo-input'),
        list: $('#todo-list')
    },
    templateFnc =
             Handlebars.compile($('#todo-template-items').html());

    function getData() {
         // presentation logic
         function isChecked(elem) {
              return elem.complete === true ? 'checked': '';
         }
         return model.getList().map(function(elem, index) {
             return {
                val: elem.val,
                checked: isChecked(elem)
            };
        });
    }
    return {
        getDOM: function() {
            return DOM;
        },
        notify: function() {
            const html = templateFnc({ view_list: getData() });
            DOM.list.html(html);
         }
    };
}


function ToDoCtrl(view, model) {
    const DOM = view.getDOM();

    DOM.input.blur(() => {
        model.add(DOM.input.val());
    });
    DOM.input.keyup((ev) => {
        if (ev.which == 13 || ev.keyCode == 13) {
            DOM.input.blur();
        }
    });
    this._model = model;
    this.notify = function() {
        const that = this;
        // checkbox handlers
        DOM.list.find('.input').each(function(index) {
            $(this).click(() => {
                that._model.complete(index, $(this).is(':checked'));
            });
        });
        // remove handlers
        DOM.list.find('.remove').each(function(index) {
            $(this).click(() => {
                that._model.remove(index);
            });
        });
    }
    this._model.register(view, this);
    return this;
}

const model = new ToDoModel(),
      view = new ToDoView(model),
      ctrl = new ToDoCtrl(view, model);



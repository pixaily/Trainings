(function() {
   'use strict';

   // Add product to admin
    function AddProduct(containerId) {
        this.form = containerId ? document.getElementById(containerId) : document.getElementById('add-product-form')
        // this.pName = undefined;
        // this.pSKU = undefined;
        // this.pPrice = undefined;
        // this.pDesc = undefined;
        // this.pAvailability = undefined;

        this.init();
    }

    AddProduct.prototype.init = function () {
        this.pName          = document.getElementById('pTitle');
        this.pSKU           = document.getElementById('pSKU');
        this.pPrice         = document.getElementById('pPrice');
        this.pDesc          = document.getElementById('pDesc');
        this.pAvailability  = document.getElementsByName('pAvailability');
        this.errorClass     = 'validation-error';
        this.errorMsgClass  = "error-message";
        this.isValid        = true;
    };

    AddProduct.prototype.validateForm = function () {
        var field1 = this.validateRequiredField(this.pName),
            field2 = this.validateRequiredField(this.pSKU),
            field3 = this.validatePrice(this.pPrice);

        if (!field1 || !field2 || !field3) {
            this.isValid = false;
        } else {
            this.isValid = true;
            this.submitData();
        }
    };

    AddProduct.prototype.validateRequiredField = function (field) {
        var val = this.getValue(field);

        if(val.length === 0) {
            if(this.hasError(field)) {
                this.updateErrorMsg(field, 'Field is required. Minimal length is 1 symbol');
            } else {
                this.setError(field, 'Field is required. Minimal length is 1 symbol');
            }
            return false;
        } else if(this.hasError(field)) {
            this.removeErrorMsg(this.getParent(field));
        }
    };

    AddProduct.prototype.getValue = function (field) {
        var val = field.value;

        val = val.trim();
        val = val.replace(/<[^>]*>/ig,'');

        return val;
    };

    AddProduct.prototype.getParent = function (field) {
        var parent = field.parentNode,
            classes = parent.className.split(' ');

        while (classes.indexOf('form-group') === -1) {
            parent = parent.parentNode;
            classes = parent.className.split(' ')
        }

        return parent;
    };

    AddProduct.prototype.hasError = function (field) {
        var parent = this.getParent(field),
            error = parent.getElementsByClassName(this.errorMsgClass);

        return (parent.className.indexOf(this.errorClass) !== -1 && error.length !== 0);
    };

    AddProduct.prototype.setError = function (field, errorText) {
        var parent = this.getParent(field),
            classes = parent.getAttribute('class');

        if (classes.split(' ').indexOf(this.errorClass) === -1) {
            this.addErrorMsg(parent, errorText);
            parent.className += " " + this.errorClass;
        } else {
            this.updateErrorMsg(parent, errorText);
        }
    };

    AddProduct.prototype.addErrorMsg = function (container, errorText) {
        var errorElement = document.createElement('p');

        errorElement.appendChild(document.createTextNode(errorText));
        errorElement.className = this.errorMsgClass;
        container.appendChild(errorElement);
    };

    AddProduct.prototype.updateErrorMsg = function (parent, errorText) {
        var currentError = parent.getElementsByClassName(this.errorMsgClass);

        if(currentError.length > 0) {
            currentError[0].innerHTML = errorText;
        } else {
            this.removeErrorMsg(parent, currentError);
        }
    };

    AddProduct.prototype.removeErrorMsg = function (parent, error) {
        var classes = parent.className.replace(this.errorClass, '');
        error = error ? error : parent.getElementsByClassName(this.errorMsgClass);
        parent.className = classes.trim();

        if(error.length > 0) {
            error[0].remove();
        }
    };

    AddProduct.prototype.validateNumber = function(field) {
        var val = Number(this.getValue(field)),
            errMsg = 'Not valid input, numeric value is required.';

        if(!Number(val)) {
            this.setError(field, errMsg);
            return false;
        }
    };

    AddProduct.prototype.validatePrice = function(field) {
        var val = this.getValue(field),
            firstDecimal = val.indexOf('.'),
            errorMessage = 'Numeric value with the following format is required: 100, 100.22',
            afterDecimal;

        if(firstDecimal !== -1) {
            afterDecimal = val.substring(firstDecimal).split('.')[1];
        }

        if(!this.validateNumber(field) && (val === 0 || val < 0 || afterDecimal !== undefined && afterDecimal.length > 2)) {
            this.setError(field, errorMessage);
            return false;
        }
    };

    AddProduct.prototype.submitData = function () {

    };

    AddProduct.prototype.parseData = function () {

    };

    AddProduct.prototype.addItem = function () {

    };

    var addProducts = new AddProduct();

    document.getElementById('addToCart').addEventListener('click', function (e) {
        e.preventDefault();

        addProducts.validateForm();

        // var form = document.getElementById('add-product-form'),
        //     fields = form.elements,
        //     fieldsCount = fields.length,
        //     data = {},
        //     textareaval = document.getElementById('pTitle').value,
        //     i;
        //
        // console.log(fieldsCount);
        //
        // for(i = 0; i < fieldsCount; i+=1) {
        //     console.log(fields[i].value);
        // }

        // form.submit(function() {
        //     console.log(textareaval);
        // });

        // var data = form.formSerialize();
        // var data = document.addproductform.submit();
    });


}());
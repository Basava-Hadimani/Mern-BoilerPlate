import React from 'react';
import PropTypes from 'prop-types';


function flattenObject(data) {

    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for(var i=0, l=cur.length; i<l; i++)
                recurse(cur[i], prop ? prop+"."+i : ""+i);
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};

export default class CsvDownload{
    constructor() {
        this.convertArrayOfAnyObjectsToCSV=this.convertArrayOfAnyObjectsToCSV.bind(this);
    }

    convertArrayOfAnyObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        //keys = Object.keys(data[0]);
        data[0]=flattenObject(data[0]);
        keys = Object.keys(data[0]);
        //keys.add(Object.keys(data[0].employee));


        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;


        data.forEach(function (item) {
            ctr = 0;
            item = flattenObject(item);
            keys.forEach(function (key) {
                if (typeof(item[key]) == "string") {
                    item[key] = item[key].replace(/,/g, "");
                    item[key] = item[key].replace(/(\r\n|\n|\r)/gm, "");
                }

                if (ctr > 0) result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

}
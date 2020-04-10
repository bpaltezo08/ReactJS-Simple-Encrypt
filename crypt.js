import React from 'react';
import { MDBCol } from 'mdbreact'
import { connect } from 'react-redux';
import axios from 'axios';

export default function SimpleEncrypt(method, value) {

  let token = localStorage.getItem('auth-token')
  let userLevel = localStorage.getItem('user-level')
  let area_code = localStorage.getItem('area-code')
  let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

  if (method == "enc") {

    value = value.toString();
    let res = ""; let t = "";
    for (var x = 0; x < value.length; x++) {
      res += chars[value[x]];
    }
    for (var x = 0; x < 10; x++) {
      t += token[x];
    }
    return res + "bpa" + t;

  } else if (method == "dec") {

    let c = value.split("bpa")[0];
    let res = "";
    for (var x = 0; x < c.length; x++) {
      res += chars.indexOf(c[x]);
    }
    return parseInt(res);
  }

}

const formatter = {
    tin(v:string) {
      if (!v || v === undefined) return v;
      else {
        var r = v.replace(/\D/g, "");
        if (r.length > 9) {
          r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/, "$1-$2$3");
          return r;
        } else if (r.length > 2) {
          r = r.replace(/^(\d\d)(\d{0,3})/, "$1-$2");
        } else {
          r = r.replace(/^(\d*)/, "$1");
        }
        return r;
      }
    },
    shortDate(d:any) {
      return new Date(d).toDateString();
    },
    date(v:any) {
      if (!v || v === undefined) return v;
      else {
        var r = v.replace(/\D/g, "");
        if (r.length > 9) {
          r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/, "$1/$2/$3");
          return r;
        } else if (r.length > 4) {
          r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/, "$1/$2/$3");
        } else if (r.length > 2) {
          r = r.replace(/^(\d\d)(\d{0,3})/, "$1/$2");
        } else {
          r = r.replace(/^(\d*)/, "$1");
        }
        return r;
      }
    },
    currency(num:number) {
      return "ETB " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    number(num:any) {
      if (!isNaN(parseFloat(num)))
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      else return num;
    },
    usaSSN(v:string) {
      if (!v || v === undefined) return v;
      else {
        var r = v.replace(/\D/g, "");
        if (r.length > 9) {
          r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
          return r;
        } else if (r.length > 4) {
          r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
        } else if (r.length > 2) {
          r = r.replace(/^(\d\d\d)(\d{0,3})/, "$1-$2");
        } else {
          r = r.replace(/^(\d*)/, "$1");
        }
        return r;
      }
    },
    zipcode(zipcode:string) {
      var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
      return zipCodePattern.test(zipcode);
    },
    phone(phone:string) {
      if (!phone || phone === undefined) return phone;
      else {
        let val = phone
          .replace(/\D/g, "")
          .replace(/^(\d)/, "($1")
          .replace(/^(\(\d{3})(\d)/, "$1) $2")
          .replace(/(\d{3})(\d{1,5})/, "$1-$2")
          .replace(/(-\d{4})\d+?$/, "$1");
  
        return val;
      }
    },
  
    ccn(num:string) {
      if (num.length < 20) {
        num = num.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
        return num;
      } else {
        return "";
      }
    },
  };
  
  export default formatter;
  
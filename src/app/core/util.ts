export class Util {

  private ACCENTS =     'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  private ACCENTS_OUT =  'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  private SPECIAL_CHARS = ' /\*-+,.:;_=?\'"[]{}<>()&%$#@!';

  removeAccents(strAccentsParam: string) {
      const strAccents = strAccentsParam.split('');
      const strAccentsOut = [];
      const strAccentsLen = strAccents.length;


      for (let y = 0; y < strAccentsLen; y++) {
        if (this.ACCENTS.indexOf(strAccents[y]) !== -1) {
          strAccentsOut[y] = this.ACCENTS_OUT.substr(this.ACCENTS.indexOf(strAccents[y]), 1);
        } else {
          strAccentsOut[y] = strAccents[y];
        }
      }

      const normalized: string = strAccentsOut.join('');
      //console.log(normalized);
      return normalized;
  }

  isSpecialChar(char: string) {
    let is: boolean = false;
    if (this.SPECIAL_CHARS.indexOf(char) > -1) {
      is = true;
    }
    return is;
  }

}

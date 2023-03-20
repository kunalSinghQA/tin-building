export const ensureEndsWith = (source, ending) => {
  if (!source.endsWith(ending)) {
    return source + ending;
  }
  return source;
};

export const ensureStartsWith = (source, starting) => {
  if (!source.startsWith(starting)) {
    return starting + source;
  }
  return source;
};

export const ensureDoesNotEndWith = (source, ending) => {
  let tempSource = source;
  while (tempSource.endsWith(ending)) {
    tempSource = tempSource.substring(0, tempSource.length - ending.length);
  }
  return tempSource;
};

export const ensureDoesNotStartWith = (source, starting) => {
  let tempSource = source;
  console.log('====================================');
  console.log(starting);
  console.log(source);
  console.log('====================================');
  while (tempSource.startsWith(starting)) {
    // if(source){
      tempSource = tempSource.substring(starting.length);
      console.log(tempSource)
    // }
  }
  return tempSource;
};

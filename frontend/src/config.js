let BASE_URL;

if(process.env.NODE_ENV === 'development'){
  BASE_URL='http://192.168.86.94';
}
else if(process.env.NODE_ENV === 'production'){
  BASE_URL=process.env.REACT_APP_BASE_URL;
}

export default BASE_URL;
class ApiResponce{
    cosntructor(statusCode,data,message="success")
{
    this.statusCode=statusCode;
    this.data=data;
    this.message=message;
    this.error=[];
    this.succuss=true;
}}
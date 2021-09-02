#include <stdio.h>

int main()
{
    float farenheit, celsius;
    printf("Enter temperature in farenheit");
    scanf("%f",&farenheit);
    celsius=((farenheit-32)*5)/9.0;
    printf("Temperature in celsius",celsius);
}
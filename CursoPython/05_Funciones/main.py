def leap_year(year):
    if (year % 4 == 0) and (year % 100 != 0):
        return "Si es un año bisiesto"
    elif (year % 100 == 0) and (year % 400 == 0):
        return "Si es un año bisiesto"
    else:
        return "No es un año bisiesto"

print(leap_year(2020))
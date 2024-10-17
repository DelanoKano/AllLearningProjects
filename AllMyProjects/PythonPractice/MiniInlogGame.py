name = input("Enter your Name: ")
if name.lower() == "delano":
    print("Welcome back Delano")
    password = input('Password: ')
    while password != "Password" or password != "password":
        correctPassword = input("Enter your Password: ")   
        if correctPassword == "Password": 
            print("Hi sir")
            print("What can i do for you today?")
            yourinput = input("??: ")
            if yourinput == "Calculate":
                whatCalculate = input("Enter 2 numbers you wanna calculate: ")
                if whatCalculate == "2 + 2":
                    print("4")
                    break
                        
            if yourinput == "Make me a Pizza!":
                print("perfect sir")
                break
            else:
                print("Okay sure. Have a good day :)")    
                break  
 
         
if name != "Delano":
    print("Welcome New USER")
    newPassword = input('Create a new Password: ')
    if newPassword:
        print("Good Job! your new password:", newPassword)          
    age  = input("Enter your Age: ")
    if int(age) <= 0:
        print('You need to be older than 0!')    
    elif int(age) > 100:
        print('You are to old!')
    gender = input("Enter your Gender: ")
    if gender != "Male" and gender != "Female" and gender != "None":
        print("Only Male or Female or none please")
    else:
        print("Your account is made! Welcome sir")    


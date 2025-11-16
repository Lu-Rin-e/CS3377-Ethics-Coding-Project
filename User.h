#ifndef USER_H
#define USER_H

#include <string>
using namespace std;

class User {
    public:
    User(string uid, string password, string name, string email, string occupation, bool isAdmin);
    string GetUID();
    string GetPassword();
    string GetName();
    string GetEmail();
    string GetOccupation();
    bool GetIsAdmin();

    private:
    string uid;
    string password;
    string name;
    string email;
    string occupation;
    bool isAdmin;
};

#endif
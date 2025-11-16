#include "User.h"

User::User(string uid, string password, string name, string email, string occupation, bool isAdmin) {
    this->uid = uid;
    this->name = name;
    this->email = email;
    this-> occupation = occupation;
    this->isAdmin = isAdmin;

}

string User::GetUID() {
    return uid;
}
string User::GetPassword() {
    return password;
}
string User::GetName() {
    return name;
}
string User::GetEmail() {
    return email;
}
string User::GetOccupation() {
    return occupation;
}
bool User::GetIsAdmin() {
    return isAdmin;
}
Feature: Sign up into losestudiantes
    As an user I want to create a new login for losestudiantes

Scenario Outline: Sign up failed because account already exists

  Given I go to losestudiantes home screen
    When I open the login screen
    And I register with name <name>, last name <lastName> and email <email>
    And I select <programType> program named <programName>
    And I set password <password>
    And I accept terms
    And I submit
    Then I expect signup error

    Examples:
      | name    | lastName  | email                       | programType   | programName                                                   | password        |
      | Jesus   | Angel     | jg.angel10@uniandes.edu.co  | master        | Maestría en Ingeniería Electrónica y de Computadores          | 12345678        |
      | Fake    | Wrong     | fake@wrong.com              | undergraduate | Biología                                                      | securepassword  |

Scenario: Insert an invalid email when trying to sign up

  Given I go to losestudiantes home screen
    When I open the login screen
    And I register with name nonexistent, last name  and email notavalidemail
    Then I expect valid email alert

Scenario Outline: Try to sign up without accepting terms

  Given I go to losestudiantes home screen
    When I open the login screen
    And I register with name <name>, last name <lastName> and email <email>
    And I select <programType> program named <programName>
    And I set password <password>
    And I submit
    Then I expect accept terms alert

    Examples:
      | name    | lastName  | email                       | programType   | programName                                                   | password        |
      | Jesus   | Angel     | jg.angel10@uniandes.edu.co  | master        | Maestría en Ingeniería Electrónica y de Computadores          | 12345678        |
      | Fake    | Wrong     | fake@wrong.com              | undergraduate | Biología                                                      | securepassword  |

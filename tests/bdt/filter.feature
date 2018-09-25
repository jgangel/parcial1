Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario: Filter by subject Electrónica Análoga

  Given I go to losestudiantes professor screen
    When I filter IELE3200
    Then I expect Electrónica Análoga first in list

Scenario: Filter by subject Optimización

  Given I go to losestudiantes professor screen
    When I filter IELE4011
    Then I expect Optimización first in list
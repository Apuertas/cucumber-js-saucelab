Feature: Pos-web-side-panel

  Scenario: (AS_001)Enter valid date, origin and destination in Form, To fields and click at Search button
    Given I open side-panel
    Then Click at all X
    Then Set "date" to "23/09/2017"
    Then Set "from" to "BCN"
    Then Set "to" to "MAD"
    Then Set "time" to "14:00"
    Then I click the send button
    Then Selected flight is displayed and the "time" "2:00p" appears

  Scenario: (AS_002)Enter invalid time and click at Search button.
    Given I open side-panel
    Then Click at all X
    Then Set "date" to "02/10/2017"
    Then Set "from" to "NYC"
    Then Set "to" to "BCN"
    Then Set "time" to "25:00:00"
    Then I click the send button
    Then Invalid message is displayed in "time" field

import React, { Component } from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import Input from '../commons/Input';
import Button from '../commons/Button';

import CloseBtn from '../Components/Closebtn'
import {theme} from '../constraints/theme';

class AddressForm extends Component {

  // disabled={!this.address}

    render(){

        const { editMode } = this.props;
        return(
            <Box f={1} bg="white" p="sm">
            <StatusBar barStyle="dark-content" />
            <ScrollView>
              <Box mb="sm">
                <Input
                  placeholder="Street Address"
                  editable={true}
                  onPress={this.goToSearch}
                  value={this.streetName}
                />
                <Input placeholder="Apt # (optional)" />
                <Box dir="row">
                  <Box f={1}>
                    <Input
                      placeholder="Postal Code"
                      editable={true}
                      value={this.postalCode}
                    />
                  </Box>
                  <Box w={theme.space.xs} />
                  <Box f={1}>
                    <Input placeholder="City" editable={true} value={this.city} />
                  </Box>
                </Box>
                <Input
                  placeholder="Instructions for delivery (optional)"
                  containerStyle={{ height: 100 }}
                  multiline
                />
              </Box>
    
              <Button
                
                disabledStyle={styles.buttonDisabled}
                style={styles.button}
                onPress={this.saveAddress}
              >
                <Text bold color="white">
                  {editMode ? 'Edit' : 'Save'}
                </Text>
              </Button>
    
              {editMode && (
                <Button
                   disabled={!this.address}
                  disabledStyle={styles.buttonDisabled}
                  style={styles.deleteButton}
                  onPress={this.props.deleteAddress}
                >
                  <Text bold color="white">
                    Delete
                  </Text>
                </Button>
              )}
            </ScrollView>
          </Box>
        )
    }
}


const styles = StyleSheet.create({
    buttonDisabled: {
      backgroundColor: theme.color.greyLight,
      borderColor: theme.color.greyLight,
    },
    button: {
      backgroundColor: theme.color.green,
    },
    deleteButton: {
      backgroundColor: theme.color.red,
      borderColor: theme.color.red,
      marginTop: 20,
    },
  });
  

export default AddressForm;
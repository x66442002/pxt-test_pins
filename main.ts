/**
 * Functions are mapped to blocks using various macros in comments starting with % (e.g., //% block).
 * //%是做定義使用非備註功能
 * The most important macro "block" specifies that a block should be generated for a **exported** function.
 * block = " "之後的內容是在定義積木的完整樣貌
 */
 
//% block="test_pins" color="#AA278D" 
//block積木群組名稱,color積木顏色
namespace test_pins {

    // note that Caml casing yields lower case
    // block text with spaces

    //% weight=20
    //% blockId=digital_writepin 
    //% block="digital write pin |%tname| to |%tvalue"
    //% tname.fieldEditor="gridpicker" 
    //% tname.fieldOptions.columns=3 
    //% tvalue.defl=0
    //% tvalue.min=0
    //% tvalue.max=1	
    export function digital_writepin(tname: DigitalPin, tvalue: number): void {
        pins.digitalWritePin(tname, tvalue)
    }

    //% weight=20
    //% blockId=digital_readpin
    //% block="digital read pin|%tname"
    //% tname.fieldEditor="gridpicker"
    //% tname.fieldOptions.columns=3
    //% inlineInputMode=inline
    export function digital_readpin(tname: DigitalPin): number {
        return pins.digitalReadPin(tname);
    }

    //% weight=20
    //% blockId=analog_writepin 
    //% block="analog write pin |%tname| to |%tvalue"
    //% tname.fieldEditor="gridpicker" 
    //% tname.fieldOptions.columns=3 
    //% tvalue.defl=1023
    //% tvalue.min=0
    //% tvalue.max=1023
    export function analog_writepin(tname: AnalogPin, tvalue: number): void {
        pins.analogWritePin(tname, tvalue)
    }
	
    //% weight=20
    //% blockId=analog_readpin
    //% block="analog read pin|%tname"
    //% tname.fieldEditor="gridpicker"
    //% tname.fieldOptions.columns=3
    //% inlineInputMode=inline
    export function analog_readpin(tname: AnalogPin): number {
        return pins.analogReadPin(tname);
    }	
	

}
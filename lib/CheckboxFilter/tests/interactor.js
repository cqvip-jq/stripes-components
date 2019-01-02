import {
  count,
  clickable,
  interactor,
  property,
  attribute,
  collection,
  is
} from '@bigtest/interactor';

const Option = interactor(class OptionInteractor {
  click = clickable();
  // label = text('li *:first-child');
  isSelected = is('[checked]');
  isDisabled = is('disabled');
  isReadOnly = is('readonly')
});

export default interactor(class CheckboxFilterInteractor {
  optionsCount = count('[data-test-checkbox-filter-option]');
  options = collection('[data-test-checkbox-filter-option]', Option);
});

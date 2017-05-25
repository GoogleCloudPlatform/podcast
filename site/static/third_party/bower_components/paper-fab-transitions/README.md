paper-fab-transitions
=====================

Polymer elements for adding morphing and speed dial transitions to floating
action buttons as defined by Material Design specifications.

## Install
```
bower install paper-fab-transitions --save
```

## Usage

### Morphing

Add morphing transition from a fab with the class `dropdown-trigger` to an element with the class `dropdown-content`:

```html
<link rel="import" href="bower_components/paper-fab-transitions/paper-fab-morph.html">

<paper-fab-morph>
  <paper-fab icon="menu" class="dropdown-trigger">
  <paper-material class="dropdown-content">
    <paper-menu>
      <paper-item>One</paper-item>
      <paper-item>Two</paper-item>
    </paper-menu>
  </paper-mterial>
</paper-fab-morph>
```

### Speed Dial

When tapping a fab with the class `dropdown-trigger`, open a speed dial menu with the class `dropdown-content`:

```html
<link rel="import" href="bower_components/paper-fab-transitions/paper-fab-speed-dial.html">

<paper-fab-speed-dial>
  <paper-fab icon="add" class="dropdown-trigger"></paper-fab>
  <div class="dropdown-content">
    <paper-fab mini icon="star-border"></paper-fab>
    <paper-fab mini icon="star-half"></paper-fab>
    <paper-fab mini icon="star"></paper-fab>
  </div>
</paper-fab-speed-dial>
```

[Documentation](http://gabiaxel.github.io/paper-fab-transitions/components/paper-fab-transitions/)

[Demo](http://gabiaxel.github.io/paper-fab-transitions/components/paper-fab-transitions/demo/)

[Material Design specifications](https://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-transitions)
